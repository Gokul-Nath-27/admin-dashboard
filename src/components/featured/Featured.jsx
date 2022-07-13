import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Featured = () => {
    return (
        <div className="featured">
            <header className="header">
                <span className="title">Total Revenue</span>
                <span className="icon"><MoreVertIcon /></span>
            </header>
            <main className="main">
                <CircularProgressbar className="progress" strokeWidth={6} value={70} text="70%" />
                <p className ="title">Total sales made today</p>
                <span className ="amount">$420</span>
                <p className ="desc">Previous transaction processing. Last payment may not be included.</p>
            </main>
            <div className="bottom">
                <div className="item">
                    <span className="title">Target</span>
                    <div className="stat positive">
                        <span className="icon">
                            <KeyboardArrowUpIcon fontSize="small"/>
                        </span>
                        <span>$12.5k</span>
                    </div>
                </div>
                <div className="item">
                    <span className="title">Last week</span>
                    <div className="stat negative">
                        <span className="icon">
                            <KeyboardArrowUpIcon fontSize="small"/>
                        </span>
                        <span>$12.5k</span>
                    </div>
                </div>
                <div className="item">
                    <span className="title">Last month</span>
                    <div className="stat positive">
                        <span className="icon">
                            <KeyboardArrowUpIcon fontSize="small"/>
                        </span>
                        <span>$12.5k</span>
                    </div>
                </div>
            
                
                
            </div>
        </div>
    )
}

export default Featured
