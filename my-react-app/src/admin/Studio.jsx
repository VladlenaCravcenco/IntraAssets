import { Studio } from 'sanity';
import { studioConfig } from '../../intra-assets/sanity.config'

export default function AdminStudio() {
  return (
    <div style={{ height: '100vh' }}>
      <Studio config={studioConfig} />
    </div>
  );
}