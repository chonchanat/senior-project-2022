import { Navbar } from '../../components/Navbar'
import Block from '../../components/Block'
import { CardWithHead } from '../../components/Card';

import fakeData from '../../fakeData/fakeData';

function CustomerBookQueue() {
    return (
        <div>
            <Navbar />
            <Block>
                <CardWithHead title="กิจกรรม" bgColor="#F8F8F8">
                    <p className="text-xl text-center font-bold">{fakeData[0].nameOfAct}</p>
                    <div className="mt-4 h-[300px] w-[300px] flex justify-center mx-auto">
                        <img src="https://miro.medium.com/max/350/1*Lo1H9oaTw32fk4jyAJCvEw.png" alt="qr code" />
                    </div>
                    <p className="mt-4">จำนวนผู้เข้าร่วม : <span>3</span> คน</p>
                    <p className="mt-4">สถานะ : <span className="text-accept">ถึงคิวของคุณแล้ว</span></p>
                    <p className="mt-4 text-decline">กรุณายื่นให้พนักงานแสกน qr-code ก่อนเข้าร่วมกิจกรรม</p>
                </CardWithHead>
            </Block>
        </div>
    );
}

export default CustomerBookQueue;