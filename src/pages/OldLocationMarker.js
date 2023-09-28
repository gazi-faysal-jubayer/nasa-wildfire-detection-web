import { Icon } from '@iconify/react'
import OldlocationIcon from '@iconify/icons-mdi/fire-alert'

const OldLocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker-old" onClick={onClick}>
            <Icon icon={OldlocationIcon} color="black" className="location-icon old-location" />
        </div>
    )
}

export default OldLocationMarker