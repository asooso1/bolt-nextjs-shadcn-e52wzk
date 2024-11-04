"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Clock, LogIn, LogOut } from "lucide-react"
import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"

export default function WorkerPage() {
  const { toast } = useToast()
  const [isWorking, setIsWorking] = useState(false)

  const handleClockIn = () => {
    setIsWorking(true)
    toast({
      title: "출근 처리되었습니다",
      description: new Date().toLocaleString(),
    })
  }

  const handleClockOut = () => {
    setIsWorking(false)
    toast({
      title: "퇴근 처리되었습니다",
      description: new Date().toLocaleString(),
    })
  }

  const handleBreak = () => {
    toast({
      title: "휴식 시간이 기록되었습니다",
      description: new Date().toLocaleString(),
    })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <main className="min-h-screen w-full">
        <div className="h-screen w-full flex items-center justify-center p-4">
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="col-span-1 sm:col-span-2">
              <h1 className="text-3xl font-bold text-center mb-8">작업자 출퇴근 관리</h1>
            </div>
            
            <Button
              className={`h-40 sm:h-48 text-xl ${
                isWorking ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
              }`}
              onClick={handleClockIn}
              disabled={isWorking}
            >
              <div className="flex flex-col items-center">
                <LogIn className="h-12 w-12 mb-4" />
                <span>출근</span>
              </div>
            </Button>
            
            <Button
              className={`h-40 sm:h-48 text-xl ${
                !isWorking ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"
              }`}
              onClick={handleClockOut}
              disabled={!isWorking}
            >
              <div className="flex flex-col items-center">
                <LogOut className="h-12 w-12 mb-4" />
                <span>퇴근</span>
              </div>
            </Button>
            
            <Button
              className="col-span-1 sm:col-span-2 h-32 sm:h-40 text-xl bg-blue-600 hover:bg-blue-700"
              onClick={handleBreak}
            >
              <div className="flex flex-col items-center">
                <Clock className="h-12 w-12 mb-4" />
                <span>휴식</span>
              </div>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}