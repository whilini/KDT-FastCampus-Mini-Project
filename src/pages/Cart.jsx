import React from 'react'
import Card from '../components/Card'
import { useGetCartQuery } from '../store/api/cartApiSlice'

const Cart = () => {
  const { data: cart, isLoading, isError } = useGetCartQuery()

  return (
    <div>
      {isLoading? ( 
        <>로딩중...</> 
      ) : isError ? (
        <>api 에러 발생</>
      ) : cart?.length !== 0 ? (
        <>
          <div style={{ marginTop: '120px', marginBottom: '100px' }}>
            {cart?.map((item, index) => (
              <Card key={index} productData={item} />
            ))}
          </div>
        </>
      ) : (
        <h1 style={{ height: '100vh', marginTop: '300px' }}>
          즐겨찾기가 없습니다.
        </h1>
      )}
    </div>
  )
}

export default Cart
