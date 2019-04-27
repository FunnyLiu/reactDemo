import withLayout from '../components/MyLayoutHoc'

const Page = ()=>(
    <div>
        <p>Hello Style</p>
        <p className="name">class name p</p>
        <style jsx>{`
            p {
                font-weight:bold;
            }
            .name {
                color:red;
                font-size:40px;
            }
        `}</style>
    </div>
)

export default withLayout(Page)