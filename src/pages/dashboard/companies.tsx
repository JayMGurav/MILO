import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function Companies() {
  return <ComingSoon />;
}

Companies.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
