import { Navbar } from '../../components/Navbar'
import { BlockMobile } from '../../components/Block'
import { Card, CardWithHead } from '../../components/Card'

import fakeData from '../../fakeData/fakeData'

function CustomerHome() {
    return (
        <div>
            <Navbar />
            <BlockMobile>
                {
                    fakeData.length ?
                        <CardWithHead title={"คิวที่กำลังจะถึง"} bgColor={"#F8F8F8"}>
                            <div className="grid grid-cols-2 gap-4 px-2">
                                <div>
                                    <img src={fakeData[0].image} alt="img of activity" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold">{fakeData[0].nameOfAct}</p>
                                    <div className="flex justify-between mt-12">
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
                        :
                        <></>
                }
                <div className="flex flex-wrap justify-between">
                    <Card title="จองคิว" bgColor="#DFD1C6" link="/customer-scan" />
                    <Card title="รายการคิว" bgColor="#BBF38F" link="/customer-myactivity" />
                    <Card title="แผนที่" bgColor="#E38181" link="/customer-map" />
                    <Card title="กิจกรรมทั้งหมด" bgColor="#F7EB84" link="/customer-activity" />
                </div>
            </BlockMobile>
        </div>
    );
}

export default CustomerHome;