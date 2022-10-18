import { Navbar } from '../components/Navbar'
import Block from '../components/Block'
import { Card, CardWithHead } from '../components/Card'

function Home() {
    return (
        <div>
            <Navbar />
            <Block>
                <div className="max-w-sm mx-auto">
                    <CardWithHead bgColor={"#F8F8F8"} />
                    <div className="flex flex-wrap justify-between">
                        <Card bgColor={"#DFD1C6"}>

                        </Card>
                        <Card bgColor={"#BBF38F"}>

                        </Card>
                        <Card bgColor={"#E38181"}>

                        </Card>
                        <Card bgColor={"#F7EB84"}>

                        </Card>
                    </div>
                </div>
            </Block>
        </div>
    );
}

export default Home;