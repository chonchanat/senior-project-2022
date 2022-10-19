import { Navbar } from '../components/Navbar'
import Block from '../components/Block'
import { Card, CardWithHead } from '../components/Card'

function Home() {

    const queue = [];

    return (
        <div>
            <Navbar />
            <Block>
                {
                    queue.length ?
                        <CardWithHead title={"คิวที่กำลังจะถึง"} bgColor={"#F8F8F8"}>

                        </CardWithHead>
                        :
                        <></>
                }
                <div className="flex flex-wrap justify-between">
                    <Card title="จองคิว" bgColor="#DFD1C6" />
                    <Card title="รายการคิว" bgColor="#BBF38F" />
                    <Card title="แผนที่" bgColor="#E38181" />
                    <Card title="กิจกรรมทั้งหมด" bgColor="#F7EB84" />
                </div>
            </Block>
        </div>
    );
}

export default Home;