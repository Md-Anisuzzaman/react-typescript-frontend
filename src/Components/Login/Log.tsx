import './Log.css'

const Log = () => {
    return (
        <div>
            <div className='parent'>
                <h1>Parent</h1>
                <div className="child">
                    <div className="left">
                        <h1>left</h1>
                    </div>
                    <div className="right">
                        <div className="form-s">
                            <form action="">

                                <h6>Email</h6>
                                <input type="email" name="" id="" />

                                <h6>Password</h6>
                                <input type="password" name="" id="" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Log


