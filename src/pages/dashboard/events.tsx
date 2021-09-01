import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function Events() {
  return <ComingSoon />;
}

Events.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
