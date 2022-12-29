import { Navbar } from '../../components/Navbar'
import { BlockMobile } from '../../components/Block';
import { Card, CardWithHead } from '../../components/Card';

import fakeData from '../../fakeData/fakeData';

import { TbQrcode } from 'react-icons/tb';
import { GoListUnordered } from 'react-icons/go';
import { BiBookContent, BiMapPin } from 'react-icons/bi';

function CustomerHome() {
    return (
        <div>
            <Navbar />
            <BlockMobile>
                {
                    fakeData.length &&
                    <CardWithHead title={"คิวที่กำลังจะถึง"}>
                        <div className="grid grid-cols-2 gap-4 px-2">
                            <div>
                                <img src={fakeData[0].image} alt="img of activity" />
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="text-xl font-bold">{fakeData[0].nameOfAct}</p>
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-xs">เวลารอคิว</p>
                                        <p className="text-sm">{fakeData[0].predTime} นาที</p>
                                    </div>
                                    <div>
                                        <p className="text-xs">จำนวนคิว</p>
                                        <p className="text-sm text-right">{fakeData[0].prevQueue} คิว</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardWithHead>
                }
                <div className="flex flex-wrap justify-between">
                    <Card title="จองคิว" bgColor="#DFD1C6" link="/customer-scan" icon={<TbQrcode size="72px" />} />
                    <Card title="รายการคิว" bgColor="#BBF38F" link="/customer-myactivity" icon={<GoListUnordered size="72px" />} />
                    <Card title="แผนที่" bgColor="#E38181" link="/customer-map" icon={<BiMapPin size="72px" />} />
                    <Card title="กิจกรรมทั้งหมด" bgColor="#F7EB84" link="/customer-activity" icon={<BiBookContent size="72px" />} />
                </div>
                {/* <input type="file" accept="image/*" capture="environment"></input> */}
            </BlockMobile>
        </div>
    );
}

export default CustomerHome;