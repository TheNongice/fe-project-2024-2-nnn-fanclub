import axios from "axios";

export default function createBooking(
  token: string,
  companyId: string,
  apptDate: string
): Promise<BookingApi> {
  return axios
    .post(
      process.env.BASE_API_URL + `/companies/${companyId}/booking`,
      { apptDate },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      return { ...res.data, message: "CREATE_OK" };
    })
    .catch((err) => {
      return { success: false, message: err };
    });
}
