import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function DashboardHome() {
  return <ComingSoon />;
}

DashboardHome.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
