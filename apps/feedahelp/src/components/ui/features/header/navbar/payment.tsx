import axios, { AxiosError } from 'axios'
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from '@paypal/react-paypal-js'

const Payment = () => {
//   const createMutation = useMutation<{ data: any }, AxiosError, any, Response>(
//     (): any => axios.post('/api/paypal/createOrder'),
//   )
//   const captureMutation = useMutation<string, AxiosError, any, Response>(
//     (data): any => axios.post('/api/paypal/captureOrder', data),
//   )
//   const createPayPalOrder = async (): Promise<string> => {
//     const response = await createMutation.mutateAsync({})
//     return response.data.orderID
//   }

//   const onApprove = async (data: OnApproveData): Promise<void> => {
//     return captureMutation.mutate({ orderID: data.orderID })
//   }
  return (



          <PayPalButtons
            style={{
              color: 'gold',
              shape: 'rect',
              label: 'pay',
              height: 50,
            }}
            fundingSource={[
                FUNDING.PAYPAL,
                FUNDING.VENMO,
                FUNDING.APPLEPAY,
                FUNDING.CARD,
                FUNDING.PAYLATER,
              ]}
            // createOrder={}
            // onApprove={}
          />








  )
}

// declare global {
//   interface Window {
//     paypal: any
//   }
// }

interface OnApproveData {
  billingToken?: string | null
  facilitatorAccessToken: string
  orderID: string
  payerID?: string | null
  paymentID?: string | null
  subscriptionID?: string | null
  authCode?: string | null
}

export default Payment;
