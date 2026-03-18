import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface AccountInfo {
  relation: string;
  name: string;
  bank: string;
  account: string;
}

const AccountSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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

  const AccountCard = ({
    accounts,
    isOpen,
    onToggle,
    label,
    tag,
  }: {
    accounts: AccountInfo[];
    isOpen: boolean;
    onToggle: () => void;
    label: string;
    tag: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="wedding-card"
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between py-1">
        <div className="flex items-center gap-2.5">
          <span className="text-[10px] tracking-widest uppercase font-light" style={{ color: "hsl(var(--gold))" }}>
            {tag}
          </span>
          <span className="font-medium text-foreground text-sm tracking-wider">{label}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: "hsl(var(--muted-foreground))" }}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-5 space-y-4">
          {accounts.map((acc, idx) => (
            <div
              key={idx}
              className="border-t pt-4 first:border-0 first:pt-0"
              style={{ borderColor: "hsl(var(--border) / 0.5)" }}
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px]" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {acc.relation}
                </span>
                <span className="text-xs font-medium text-foreground tracking-wider">{acc.name}</span>
              </div>
              <div
                className="flex items-center justify-between rounded-2xl p-3.5"
                style={{
                  background: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border) / 0.5)",
                }}
              >
                <div>
                  <p className="text-[10px] mb-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {acc.bank}
                  </p>
                  <p className="text-xs font-medium text-foreground tracking-wider">{acc.account}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(acc.account)}
                  className="account-btn flex items-center gap-1 text-[11px]"
                >
                  {copiedAccount === acc.account ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  복사
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section ref={ref} className="py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="max-w-md mx-auto"
      >
        <p className="section-label">Gift</p>
        <h2 className="wedding-title">마음 전하실 곳</h2>
        <div className="wedding-divider" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-xs mb-10 font-light leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          축하의 마음을 담아 축의금을 전달해 주세요.
        </motion.p>

        <div className="space-y-3">
          <AccountCard accounts={groomAccounts} isOpen={openGroom} onToggle={() => setOpenGroom(!openGroom)} label="계좌번호" tag="Groom" />
          <AccountCard accounts={brideAccounts} isOpen={openBride} onToggle={() => setOpenBride(!openBride)} label="계좌번호" tag="Bride" />
        </div>
      </motion.div>
    </section>
  );
};

export default AccountSection;
