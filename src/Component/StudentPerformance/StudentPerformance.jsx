import { BarChart } from 'recharts';
import { Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const StudentPerformance = () => {
    const data = [
        { "course": "Intro Python", "students": 150, "average_score": 85 },
        { "course": "HTML & CSS", "students": 120, "average_score": 78 },
        { "course": "JS Beginners", "students": 130, "average_score": 82 },
        { "course": "Data Science", "students": 100, "average_score": 88 },
        { "course": "ML Basics", "students": 90, "average_score": 91 }
    ];


    return (
        <div>
            <h2 className="mt-5 text-3xl font-semibold text-center my-4">Our Courses & Student Performance</h2>
            <div className='overflow-scroll md:overflow-hidden '>
                <BarChart width={930} height={450} data={data} className='mx-auto'>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="course" className='text-wrap' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="students" fill="#8884d8" />
                    <Bar dataKey="average_score" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default StudentPerformance;