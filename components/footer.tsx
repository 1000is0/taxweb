export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">税</span>
              </div>
              <span className="font-bold text-lg">김세무 세무회계사무소</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              정확하고 신뢰할 수 있는 세무 서비스로 고객의 성공을 함께 합니다.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>세무신고 대행</li>
              <li>기장 대리</li>
              <li>법인 설립</li>
              <li>절세 컨설팅</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">회사 정보</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>대표: 김세무</li>
              <li>사업자등록번호: 123-45-67890</li>
              <li>세무사등록번호: 12345</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>전화: 02-1234-5678</li>
              <li>이메일: contact@kimtax.com</li>
              <li>주소: 서울특별시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center text-primary-foreground/60">
            © 2025 김세무 세무회계사무소. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
