"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { MainLayout } from "@/components/layout/main-layout"
import { Sidebar } from "@/components/layout/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"

const initialData = [
  {
    id: 1,
    name: "김철수",
    status: "출근",
    time: "2024-01-10 09:00:00",
    department: "생산부",
  },
  {
    id: 2,
    name: "이영희",
    status: "퇴근",
    time: "2024-01-10 18:00:00",
    department: "품질관리부",
  },
  {
    id: 3,
    name: "박지성",
    status: "휴식",
    time: "2024-01-10 12:30:00",
    department: "생산부",
  },
]

export default function AdminPage() {
  const [data] = useState(initialData)
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredData = data.filter((item) => {
    const matchesDepartment = departmentFilter === "all" || item.department === departmentFilter
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    return matchesDepartment && matchesStatus
  })

  return (
    <>
      <Sidebar />
      <MainLayout>
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h1 className="text-2xl font-bold mb-6">관리자 대시보드</h1>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="w-full sm:w-48">
              <Select onValueChange={setDepartmentFilter} defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="부서 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체 부서</SelectItem>
                  <SelectItem value="생산부">생산부</SelectItem>
                  <SelectItem value="품질관리부">품질관리부</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full sm:w-48">
              <Select onValueChange={setStatusFilter} defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="상태 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체 상태</SelectItem>
                  <SelectItem value="출근">출근</SelectItem>
                  <SelectItem value="퇴근">퇴근</SelectItem>
                  <SelectItem value="휴식">휴식</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <ScrollArea className="w-full">
            <div className="min-w-[600px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>이름</TableHead>
                    <TableHead>부서</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>시간</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.department}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            item.status === "출근"
                              ? "bg-green-100 text-green-800"
                              : item.status === "퇴근"
                              ? "bg-red-100 text-red-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell>{item.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </div>
      </MainLayout>
    </>
  )
}