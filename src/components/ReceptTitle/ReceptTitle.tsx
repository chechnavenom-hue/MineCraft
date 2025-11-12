import type { ReceptT } from '../../data/recepts'
import './ReceptTitle.css'

type ReceptTitleProps = {
    name: ReceptT['title']
}

function ReceptTitle({ name }: ReceptTitleProps) {

    return (
        <div className='receptTitle-container'>
            {name}
        </div>
    )
}

export default ReceptTitle