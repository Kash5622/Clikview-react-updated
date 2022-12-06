import React,{useState} from 'react'

function MiddleNavBar() {
    const [searchVideo, setSearchVideo] = useState("");
    const handleChange=(e)=>{
        setSearchVideo(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.prevenDefault();
        setSearchVideo("");
    }
    return (
        <>
                <form className="navbar-form search-header" id='middleNav' role="search" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="search-bar" name="inputSearch" placeholder="Search for videos"  value={searchVideo} onChange={handleChange}/>
                        <button type="submit" className="btn btn-main"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M23.707 22.293l-5.969-5.969a10.016 10.016 0 10-1.414 1.414l5.969 5.969a1 1 0 001.414-1.414zM10 18a8 8 0 118-8 8.009 8.009 0 01-8 8z"></path></svg></button>
                        {/* <div className="search-dropdown hidden"></div> */}
                    </div>
                </form>
        </>
    )
}

export default MiddleNavBar