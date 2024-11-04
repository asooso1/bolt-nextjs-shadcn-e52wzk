import { Button } from '@/components/ui/button';
import { Building2, Users } from 'lucide-react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/main-layout';
import { Sidebar } from '@/components/layout/sidebar';

export default function Home() {
  return (
    <>
      <Sidebar />
      <MainLayout>
        <div className="flex min-h-[80vh] items-center justify-center">
          <div className="w-full max-w-md space-y-8 p-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">현장 작업자 관리 시스템</h1>
              <p className="mt-2 text-gray-600">작업자 또는 관리자로 접속하세요</p>
            </div>
            
            <div className="space-y-4">
              <Link href="/worker" className="block w-full">
                <Button
                  variant="outline"
                  className="w-full h-16 text-lg justify-start space-x-4 border-2"
                >
                  <Users className="h-6 w-6" />
                  <span>작업자 접속</span>
                </Button>
              </Link>

              <Link href="/admin" className="block w-full">
                <Button
                  variant="outline"
                  className="w-full h-16 text-lg justify-start space-x-4 border-2"
                >
                  <Building2 className="h-6 w-6" />
                  <span>관리자 접속</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}