import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">20년 경력의 전문 세무사</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            정확하고 신뢰할 수 있는
            <br />
            <span className="text-primary">세무 회계 서비스</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
            개인사업자부터 법인까지, 체계적인 세무 관리로 귀하의 사업 성장을 함께 합니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
              무료 상담 신청하기
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="/services">
                서비스 자세히 보기
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">년 경력</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">고객사</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
