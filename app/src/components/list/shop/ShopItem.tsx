import React from 'react'
import history from '@utils/routes/history'
import { ShopForList } from '@/utils/api/request-response-types/client/models/Shop'

interface IItemProps<T> {
    details: ShopForList
    index?: number
    url?: string
    subParams?: boolean
}

const ShopItem = <T extends Record<string, any>>({
    details,
    index,
    url,
    subParams
}: IItemProps<T>): React.ReactElement => {
    return (
        <div className="block">
            name: {details.name}
            address: { details.address }
            phone number: { details.phoneNumber }
        </div>
    )
}

export default ShopItem
