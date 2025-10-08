import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calculator, Building2, TrendingUp, Users, Shield } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "세무신고 대행",
    description: "부가가치세, 종합소득세, 법인세 등 모든 세무신고를 정확하게 처리해드립니다.",
  },
  {
    icon: Calculator,
    title: "기장 대리",
    description: "매월 정확한 회계 기장으로 사업의 재무 상태를 투명하게 관리합니다.",
  },
  {
    icon: Building2,
    title: "법인 설립",
    description: "법인 설립부터 사업자등록까지 원스톱 서비스를 제공합니다.",
  },
  {
    icon: TrendingUp,
    title: "절세 컨설팅",
    description: "합법적인 절세 방안을 제시하여 세금 부담을 최소화합니다.",
  },
  {
    icon: Users,
    title: "급여 관리",
    description: "4대보험 신고 및 급여 계산을 정확하게 처리해드립니다.",
  },
  {
    icon: Shield,
    title: "세무조사 대응",
    description: "세무조사 시 전문적인 대응으로 고객의 권익을 보호합니다.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">전문 세무 서비스</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            개인부터 법인까지, 모든 세무 업무를 전문적으로 처리합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
