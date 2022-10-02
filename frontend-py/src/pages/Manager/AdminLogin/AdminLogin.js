function AdminLogin(){
    return(
        <section>
            <form onSubmit={login}>
                <div className="row-container">
                    <label>email</label>
                    <input type='email' />
                    
                </div>
            </form>
        </section>
    )
}

export default AdminLogin;