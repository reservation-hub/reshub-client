import React, { useState } from 'react'
import {  Review, ReviewScore } from '@utils/api/request-response-types/client/models/Review'
import { Items } from '@components/list/_PropsType'
import CardTemplate from '@components/Template/CardTemplate'
import Button from '@components/common/Button'
import ModalOverlay from '@components/modal/ModalOverlay'
import ModalAlert from '@components/modal/ModalAlert'
import { useModal } from '@utils/hooks/useModal'
import SubTitle from '@components/common/SubTitle'

export interface ReviewItemProps<T> extends Items<T> {
  deleteReview?: (reviewId: number, shopId: number) => void
}

const ReviewItem = <T extends Review[]>({
  item,
  deleteReview
}: ReviewItemProps<T>) => {
  const textSize = 'lg:text-[1.6rem] text-[1rem]'
  const { open, modalHandler } = useModal(false)
  const [reviewId, setReviewId] = useState<number>()
  const scoreClass = (score: ReviewScore): string => {
    switch (score) {
      case ReviewScore.one:
        return 'bg-yellow-400 mt-3'
      case ReviewScore.two:
        return 'bg-yellow-500 mt-3'
      case ReviewScore.three:
        return 'bg-blue-400'
      case ReviewScore.four:
        return 'bg-red-400'
      default:
        return 'bg-green-400'
    }
  }
  return (
    <>
      {item?.map((v, i) => (
        <>
          {`shop id: ${v.shopId}`}
          {`client id: ${v.clientId}`}
          {`review id: ${v.id}`}
          <CardTemplate classes='lg:m-5 mt-4 border rounded-lg' key={i} shadow>
            <div className='grid p-5 pt-2'>
              <div className='flex justify-between'>
                <SubTitle text={v.shopName} />
                <div className=''>
                  <span className={textSize}>
                    満足度：
                  </span>
                  <span
                    className={`${scoreClass(v.score)} mt-3 rounded-lg p-1 text-center text-secondary-light`}
                  >
                    {v.score}
                  </span>
                  <Button
                    classes='mt-3 p-1 border-none bg-error-main text-secondary-light rounded-lg'
                    onClick={() => (modalHandler(), setReviewId(v.id))}
                  >
                    削除
                  </Button>
                </div>
              </div>
              <div className='flex items-center mt-4 lg:m-0'>
                <div className={`${textSize} mr-5 mt-4 text-gray-main`}>
                  <p className='text-primary-dark'>{v.text}</p>
                </div>
              </div>
            </div>
          </CardTemplate>
          {open && (
            <ModalOverlay open={open} onClose={modalHandler}>
              <div
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <ModalAlert
                  onClose={modalHandler}
                  submitHandler={() =>
                    deleteReview &&
                    (deleteReview(Number(reviewId), Number(v.shopId)), modalHandler())
                  }
                  buttonText='削除'
                >
                  {v.shopId}この口コミを<span className='text-error-main'>削除</span>
                  しますか?
                </ModalAlert>
              </div>
            </ModalOverlay>
          )}
        </>
      ))}
    </>
  )
}

export default ReviewItem
