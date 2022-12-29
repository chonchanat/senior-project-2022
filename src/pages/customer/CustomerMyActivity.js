import { Navbar } from '../../components/Navbar';
import { BlockMobile } from '../../components/Block';
import { MobileList } from '../../components/Table';

import fakeData from '../../fakeData/fakeData';

function CustomerMyActivity() {
    return (
        <div>
            <Navbar />
            <BlockMobile>
                <div className="flex justify-between items-end my-2">
                <p className="">รายการคิวทั้งหมดของคุณ</p>
                <p className="text-sm">กิจกรรมที่จอง 4/5</p>
                </div>
                <div className="overflow-hidden overflow-y-auto">
                    {fakeData.map((data, index) => {
                        return (
                            <MobileList MyActivity={data} index={index} />
                        );
                    })}
                </div>
            </BlockMobile>
        </div>
    );
}

export default CustomerMyActivity;