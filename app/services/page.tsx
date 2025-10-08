import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Calculator, 
  FileText, 
  Building2, 
  Users, 
  TrendingUp, 
  Shield,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Calculator,
      title: "개인사업자 세무관리",
      description: "소상공인부터 전문직까지 개인사업자의 모든 세무 업무를 체계적으로 관리합니다.",
      features: [
        "부가가치세 신고 및 납부",
        "소득세 신고 및 납부",
        "원천징수 및 사업자등록",
        "세무 상담 및 컨설팅"
      ],
      price: "월 50,000원부터"
    },
    {
      icon: Building2,
      title: "법인 세무관리",
      description: "중소기업부터 대기업까지 법인의 복잡한 세무 업무를 전문적으로 처리합니다.",
      features: [
        "법인세 신고 및 납부",
        "부가가치세 신고 및 납부",
        "원천징수 및 지급명세서",
        "세무 감사 대응"
      ],
      price: "월 200,000원부터"
    },
    {
      icon: FileText,
      title: "세무신고 대행",
      description: "정확하고 신속한 세무신고로 고객의 부담을 덜어드립니다.",
      features: [
        "연말정산 대행",
        "종합소득세 신고",
        "부가가치세 신고",
        "법인세 신고"
      ],
      price: "건당 30,000원부터"
    },
    {
      icon: Users,
      title: "급여관리",
      description: "체계적인 급여관리로 인사업무의 효율성을 높입니다.",
      features: [
        "급여 계산 및 지급",
        "4대보험 처리",
        "원천징수 처리",
        "급여명세서 발급"
      ],
      price: "월 30,000원부터"
    },
    {
      icon: TrendingUp,
      title: "세무컨설팅",
      description: "전문적인 세무 컨설팅으로 사업의 성장을 지원합니다.",
      features: [
        "세무 전략 수립",
        "절세 방안 제시",
        "사업 구조 개선",
        "세무 리스크 관리"
      ],
      price: "시간당 100,000원"
    },
    {
      icon: Shield,
      title: "세무감사 대응",
      description: "세무감사 시 전문적인 대응으로 고객을 보호합니다.",
      features: [
        "감사 자료 준비",
        "감사관 면담 동행",
        "이의신청 및 구제",
        "사후 관리"
      ],
      price: "건당 500,000원부터"
    }
  ]

  const process = [
    {
      step: "01",
      title: "상담 및 견적",
      description: "무료 상담을 통해 고객의 요구사항을 파악하고 맞춤형 견적을 제공합니다."
    },
    {
      step: "02", 
      title: "계약 및 자료수집",
      description: "계약 체결 후 필요한 서류와 자료를 체계적으로 수집합니다."
    },
    {
      step: "03",
      title: "업무 수행",
      description: "전문 세무사가 정확하고 신속하게 세무 업무를 처리합니다."
    },
    {
      step: "04",
      title: "완료 및 사후관리",
      description: "업무 완료 후 결과를 보고하고 지속적인 사후관리를 제공합니다."
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">전문 세무 서비스</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              <span className="text-primary">세무 서비스</span>
              <br />
              안내
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
              20년 경력의 전문 세무사가 제공하는 체계적이고 신뢰할 수 있는 세무 서비스를 만나보세요
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              제공 서비스
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              개인사업자부터 법인까지, 모든 세무 업무를 전문적으로 처리합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {service.price}
                    </span>
                    <Button size="sm" variant="outline">
                      상담하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              업무 진행 과정
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              체계적이고 투명한 업무 진행으로 고객의 신뢰를 얻습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              지금 바로 상담받아보세요
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              무료 상담을 통해 귀하의 사업에 맞는 최적의 세무 서비스를 제안해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                무료 상담 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                전화 상담: 02-1234-5678
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
