import Login from '@/pages/Login';
import Register from '@/pages/Regsiter'
import SearchHistory from '@/components/SearchHistory';


export default function Home() {
    return (
        <main>
            <div className='flex h-screen bg-white font-poppins'>
                {/* <Register /> */}
                <Login />
            </div>
        </main>
    );
}
