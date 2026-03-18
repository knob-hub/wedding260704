import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Copy, Check, Share2 } from "lucide-react";
import { toast } from "sonner";

interface AccountInfo {
  relation: string;
  name: string;
  bank: string;
  account: string;
}

const AccountSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [openGroom, setOpenGroom] = useState(false);
  const [openBride, setOpenBride] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const groomAccounts: AccountInfo[] = [
    { relation: "신랑", name: "김민준", bank: "신한은행", account: "110-123-456789" },
    { relation: "신랑 아버지", name: "김철수", bank: "국민은행", account: "123-45-6789012" },
    { relation: "신랑 어머니", name: "이영희", bank: "우리은행", account: "1002-123-456789" },
  ];

  const brideAccounts: AccountInfo[] = [
    { relation: "신부", name: "박서연", bank: "카카오뱅크", account: "3333-12-3456789" },
    { relation: "신부 아버지", name: "박민수", bank: "하나은행", account: "123-456789-12345" },
    { relation: "신부 어머니", name: "최지영", bank: "농협", account: "351-1234-5678-12" },
  ];

  const copyToClipboard = async (account: string) => {
    try {
      await navigator.clipboard.writeText(account.replace(/-/g, ""));
      setCopiedAccount(account);
      toast.success("계좌번호가 복사되었습니다");
      setTimeout(() => setCopiedAccount(null), 2000);
    } catch {
      toast.error("복사에 실패했습니다");
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "희원 ♥ 유정 결혼합니다",
          text: "2026년 7월 4일 토요일 오후 2시\n더테라스 웨딩 11층",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("링크가 복사되었습니다");
      }
    } catch { /* cancelled */ }
  };

  const AccordionCard = ({
    accounts, isOpen, onToggle, tag,
  }: {
    accounts: AccountInfo[]; isOpen: boolean; onToggle: () => void; tag: string;
  }) => (
    <div
      className="overflow-hidden"
      style={{ border: "1px solid hsl(var(--divider))" }}
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between px-5 py-4">
        <span
          className="text-[10px] tracking-[0.15em]"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {tag}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: "hsl(var(--silver))" }}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 space-y-2">
          {accounts.map((acc, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "hsl(var(--secondary))" }}
            >
              <div>
                <p className="text-[9px] mb-0.5 tracking-wider" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {acc.relation} · {acc.bank}
                </p>
                <p className="text-[11px] tracking-wider" style={{ color: "hsl(var(--foreground))" }}>{acc.account}</p>
              </div>
              <button
                onClick={() => copyToClipboard(acc.account)}
                className="w-8 h-8 flex items-center justify-center transition-colors"
                style={{ background: "hsl(var(--accent))" }}
              >
                {copiedAccount === acc.account
                  ? <Check className="w-3 h-3" style={{ color: "hsl(var(--charcoal))" }} />
                  : <Copy className="w-3 h-3" style={{ color: "hsl(var(--silver))" }} />}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  return (
    <section ref={ref} className="magazine-section pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-sm mx-auto"
      >
        <div className="magazine-divider" />

        <p className="section-label mb-8">Gift</p>

        <div className="space-y-2 mb-16">
          <AccordionCard accounts={groomAccounts} isOpen={openGroom} onToggle={() => setOpenGroom(!openGroom)} tag="신랑측 계좌번호" />
          <AccordionCard accounts={brideAccounts} isOpen={openBride} onToggle={() => setOpenBride(!openBride)} tag="신부측 계좌번호" />
        </div>

        {/* Share + Footer */}
        <div className="text-center">
          <button
            onClick={handleShare}
            className="account-btn inline-flex items-center gap-2 mb-20"
          >
            <Share2 className="w-3 h-3" />
            청첩장 공유하기
          </button>

          <div className="magazine-divider" />

          <p
            className="text-[11px] tracking-[0.3em] font-light"
            style={{ color: "hsl(var(--silver))", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Heewon & Yujeong
          </p>
          <p className="text-[9px] tracking-[0.2em] mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>
            July 4, 2026
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AccountSection;
