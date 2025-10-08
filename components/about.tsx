import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Heart, Target } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "전문성",
    description: "20년 이상의 실무 경험과 전문 지식을 바탕으로 최상의 서비스를 제공합니다.",
  },
  {
    icon: Clock,
    title: "신속성",
    description: "빠른 응대와 처리로 고객의 시간을 절약해드립니다.",
  },
  {
    icon: Heart,
    title: "신뢰성",
    description: "정직하고 투명한 업무 처리로 고객과의 신뢰를 최우선으로 합니다.",
  },
  {
    icon: Target,
    title: "맞춤형",
    description: "각 고객의 상황에 맞는 최적의 세무 솔루션을 제공합니다.",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                왜 저희를 선택해야 할까요?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                김세무 세무회계사무소는 20년 이상의 경력을 바탕으로 개인사업자부터 중소기업, 법인까지 다양한 고객에게
                전문적인 세무 서비스를 제공하고 있습니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                정확한 세무 처리와 합법적인 절세 방안 제시로 고객의 사업 성장을 함께 하겠습니다.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <span className="text-4xl">🏢</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
