import type { ReceptT } from '../../data/recepts'
import './ReceptTitle.css'

type ReceptTitleProps = {
    name: ReceptT['title'];
    isSelected: boolean;
}

function ReceptTitle({ name, isSelected }: ReceptTitleProps) {
    const classNames = ['receptTitle-container', (isSelected ? 'receptTitle-container_active' : null)] // 'receptTitle-container receptTitle-container_active'

    return (
        <div className={classNames.join(' ')}>
            {name}
        </div>
    )
}

export default ReceptTitle