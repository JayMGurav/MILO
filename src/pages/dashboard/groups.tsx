import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function Groups() {
  return <ComingSoon />;
}

Groups.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
