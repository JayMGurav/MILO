import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function QnA() {
  return <ComingSoon />;
}

QnA.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
