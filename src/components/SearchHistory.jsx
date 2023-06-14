'use client';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { FiSearch, FiX } from 'react-icons/fi';

export default function SearchCityModal() {
    const searchingHistory = [
        {
            id: 1,
            booking: '1234ABC',
        },
        {
            id: 2,
            booking: '7UY71912',
        },
    ];

    return (
        <div className='h-[275px] w-[700px]'>
            <Card>
                <Card.Title className={'py-[16px]'} handleCardShow={() => console.log('Show the Card')}>
                    <div className='relative w-[600px] '>
                        <Input className='rounded-rad-1 border-net-2 py-2 pl-10 pr-2 text-body-6' placeholder={'Masukan nomor Penerbangan'} />
                        <FiSearch className=' absolute top-1/2 ml-4 h-5 w-5 translate-y-[-50%] text-net-2' />
                    </div>
                </Card.Title>
                <Card.Body className={'mt-1'}>
                    <div className='flex justify-between'>
                        <h1 className='font-poppins text-title-2 font-medium'>Pencarian Terkini</h1>
                        <Button className='bg-white py-1 font-poppins text-body-6 font-medium text-alert-3'>Hapus</Button>
                    </div>
                    <div className='mt-3 flex  h-[148px] flex-col  gap-1 overflow-y-scroll'>
                        {searchingHistory &&
                            searchingHistory.map((history) => (
                                <div key={history.id} className='flex justify-between border-b-[1px] border-b-net-2 py-[10px] font-normal'>
                                    <h3 className='font-poppins text-body-6'>{history.booking}</h3>
                                    <Button className='h-6 w-6 bg-white'>
                                        <FiX className='h-full w-full text-net-3' />
                                    </Button>
                                </div>
                            ))}
                    </div>
                </Card.Body>
                {/* <Card.Footer handleCardAction={() => console.log('Simpan Data')}>Simpan</Card.Footer> */}
            </Card>
        </div>
    );
}
