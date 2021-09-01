import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function Try() {
  return <ComingSoon />;
}

Try.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
