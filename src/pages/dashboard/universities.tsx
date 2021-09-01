import DashboardLayout from '@/components/DashboardLayout';
import ComingSoon from '@/components/ComingSoon';

export default function Universities() {
  return <ComingSoon />;
}

Universities.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
