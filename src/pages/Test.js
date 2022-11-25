import {
    TableHead,
    TableBody,
    TableRow,
} from '../components/Table/Table'

function Test() {
    return (
        <div className="w-full min-h-screen bg-fha flex justify-center items-center">
            <div className="w-[96%] min-h-screen bg-white p-10">
                <p>Table version 1.0</p>
                <TableRow condition="head">
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
                <TableRow>
                    <TableBody>6210503519</TableBody>
                    <TableBody>Chonchanat Tubtiang</TableBody>
                    <TableBody>Administrator</TableBody>
                    <TableBody>OS</TableBody>
                </TableRow>
                <TableRow>
                    <TableBody>6210505210</TableBody>
                    <TableBody>Pokpong Noppakun</TableBody>
                    <TableBody>Administrator</TableBody>
                    <TableBody>OS</TableBody>
                </TableRow>
            </div>
        </div>
    );
}

export default Test;