"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Copy, ArrowRightLeft, Sparkles, Lock, Unlock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function KarexEncoder() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("karex-theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
    }
  }, [])

  const shiftCharacter = (char: string, shift: number, isEncoding: boolean) => {
    const actualShift = isEncoding ? shift : -shift

    // Arabic alphabet
    const arabicAlphabet = [
      "ا",
      "ب",
      "ت",
      "ث",
      "ج",
      "ح",
      "خ",
      "د",
      "ذ",
      "ر",
      "ز",
      "س",
      "ش",
      "ص",
      "ض",
      "ط",
      "ظ",
      "ع",
      "غ",
      "ف",
      "ق",
      "ك",
      "ل",
      "م",
      "ن",
      "ه",
      "و",
      "ي",
      "ء",
      "ؤ",
      "ئ",
      "ى"
    ]

    const alefVariants = {
      أ: "ا",
      إ: "ا",
      آ: "ا",
    }

    const normalizeArabicChar = (char) => {
      return alefVariants[char] || char
    }

    // Check if the character is Arabic
    if (/[\u0621-\u063A\u0640-\u064A]/.test(char)) {
      const normalizedChar = normalizeArabicChar(char)
      const charIndex = arabicAlphabet.indexOf(normalizedChar)

      if (charIndex !== -1) {
        const shiftedIndex =
          (((charIndex + actualShift) % arabicAlphabet.length) + arabicAlphabet.length) % arabicAlphabet.length
        const shiftedChar = arabicAlphabet[shiftedIndex]

        if (!isEncoding && normalizedChar === "ا" && char !== normalizedChar) {
          return shiftedChar === "ا" ? char : shiftedChar
        }

        return shiftedChar
      }
    }

    // Check if the character is an Arabic digit
    if (/[٠-٩]/.test(char)) {
      const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
      const digitIndex = arabicDigits.indexOf(char)
      if (digitIndex !== -1) {
        const shiftedIndex = (((digitIndex + actualShift) % 10) + 10) % 10
        return arabicDigits[shiftedIndex]
      }
    }

    // Check if the character is a digit
    if (/[0-9]/.test(char)) {
      const digit = Number.parseInt(char)
      const shiftedDigit = (((digit + actualShift) % 10) + 10) % 10
      return shiftedDigit.toString()
    }

    // Check if the character is an English letter
    if (/[A-Za-z]/.test(char)) {
      const isUpperCase = char >= "A" && char <= "Z"
      const baseCode = isUpperCase ? 65 : 97
      const charCode = char.charCodeAt(0) - baseCode
      const shiftedCode = (((charCode + actualShift) % 26) + 26) % 26
      return String.fromCharCode(shiftedCode + baseCode)
    }

    // Handle spaces
    if (char === " ") {
      return isEncoding ? "/" : " "
    }
    if (char === "/" && !isEncoding) {
      return " "
    }

    // For any other character (symbols, punctuation, emojis, etc.), keep it as is
    return char
  }

  const karexEncode = (text: string): string => {
    return text
      .split("")
      .map((char, index) => {
        const position = index + 1
        const shift = position - 1
        return shiftCharacter(char, shift, true)
      })
      .join("")
  }

  const karexDecode = (text: string): string => {
    return text
      .split("")
      .map((char, index) => {
        const position = index + 1
        const shift = position - 1
        return shiftCharacter(char, shift, false)
      })
      .join("")
  }

  const validateInput = (text: string): boolean => {
    // Accept all characters - no validation restrictions
    // The encoder will handle supported characters and keep unsupported ones as is
    return true
  }

  const processText = (isEncoding: boolean) => {
    if (!input.trim()) {
      toast({
        title: "⚠️ Input Required",
        description: "Please enter some text to process.",
        variant: "destructive",
      })
      return
    }

    if (!validateInput(input)) {
      toast({
        title: "🚫 خطأ - Invalid Input",
        description: "Supports: Arabic & English letters, numbers, commas, forward slashes, and brackets only",
        variant: "destructive",
      })
      return
    }

    const result = isEncoding ? karexEncode(input) : karexDecode(input)
    setOutput(result)

    toast({
      title: isEncoding ? "🔐 Text Encoded!" : "🔓 Text Decoded!",
      description: `Successfully ${isEncoding ? "encoded" : "decoded"} your message with Karex cipher.`,
    })
  }

  const handleEncode = () => processText(true)
  const handleDecode = () => processText(false)

  const handleCopy = async () => {
    if (!output) {
      toast({
        title: "📋 Nothing to Copy",
        description: "No output to copy to clipboard.",
        variant: "destructive",
      })
      return
    }

    try {
      await navigator.clipboard.writeText(output)
      toast({
        title: "✨ Copied Successfully!",
        description: "Result copied to clipboard.",
      })
    } catch (err) {
      toast({
        title: "❌ Copy Failed",
        description: "Failed to copy to clipboard.",
        variant: "destructive",
      })
    }
  }

  const handleSwap = () => {
    setInput(output)
    setOutput("")
    toast({
      title: "🔄 Swapped!",
      description: "Output moved to input field.",
    })
  }

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem("karex-theme", newMode ? "dark" : "light")
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-slate-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${isDarkMode ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600"}`}
            >
              <Sparkles className="h-6 w-6" />
            </div>
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Karex Encoder
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="w-10 h-10 bg-transparent"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Input Section */}
          <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${isDarkMode ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"}`}
                >
                  <Unlock className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className={`text-lg sm:text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Input Text
                  </CardTitle>
                  <CardDescription className={isDarkMode ? "text-slate-400" : "text-gray-600"}>
                    Enter your message (supports all characters - unsupported symbols will remain unchanged)
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Type your secret message here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={cn(
                  "min-h-[120px] resize-none text-base",
                  isDarkMode
                    ? "bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500",
                )}
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleEncode} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                  <Lock className="w-4 h-4 mr-2" />
                  Encode to Karex
                </Button>
                <Button onClick={handleDecode} variant="outline" className="flex-1 bg-transparent">
                  <Unlock className="w-4 h-4 mr-2" />
                  Decode from Karex
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${isDarkMode ? "bg-green-600 text-white" : "bg-green-100 text-green-600"}`}
                >
                  <Lock className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className={`text-lg sm:text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Output Result
                  </CardTitle>
                  <CardDescription className={isDarkMode ? "text-slate-400" : "text-gray-600"}>
                    Your encrypted or decrypted message
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className={cn(
                  "min-h-[120px] p-4 rounded-lg border text-base",
                  isDarkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200 text-gray-900",
                )}
              >
                {output || (
                  <span className={isDarkMode ? "text-slate-400" : "text-gray-500"}>
                    Your encrypted result will appear here...
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={handleCopy}
                  disabled={!output}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Result
                </Button>
                <Button
                  onClick={handleSwap}
                  disabled={!output}
                  variant="outline"
                  className="disabled:opacity-50 bg-transparent"
                  aria-label="Swap text"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className={`mt-8 text-center ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4 text-green-500" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock className="h-4 w-4 text-blue-500" />
              <span>Client-Side</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
