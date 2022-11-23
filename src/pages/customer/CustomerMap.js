import { Navbar } from '../../components/Navbar';
import { BlockMobile } from '../../components/Block'
import { CardWithHead } from '../../components/Card';

function CustomerMap() {
    return (
        <div>
            <Navbar />
            <BlockMobile>
                <CardWithHead title="แผนที่" bgColor="#F8F8F8">

                </CardWithHead>
            </BlockMobile>
        </div>
    );
}

export default CustomerMap;