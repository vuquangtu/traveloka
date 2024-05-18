import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  addDoc,
  collection,
  deleteDoc,
  getDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../firebase/config";

const hotelImgsApi = createApi({
  reducerPath: "hotelImgsApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["hotelImgs"],
  endpoints: (builder) => ({
    fetchhotelImgs: builder.query({
      queryFn: async () => {
        try {
          const hotelImgsRef = collection(db, "hotelImgs");
          const querySnapshot = await getDocs(hotelImgsRef);
          const listhotelImgs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: listhotelImgs };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["hotelImgs"],
    }),
    fetchhotelImg: builder.query({
      queryFn: async (id) => {
        try {
          const hotelImgRef = doc(db, "hotelImgs", id);
          const snapshot = await getDoc(hotelImgRef);
          return { data: snapshot.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["hotelImgs"],
    }),

    addhotelImg: builder.mutation({
      queryFn: async (hotelImg) => {
        try {
          await addDoc(collection(db, "hotelImgs"), {
            ...hotelImg,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["hotelImgs"],
    }),
    updatehotelImg: builder.mutation({
      queryFn: async ({ id, hotelImg }) => {
        try {
          await updateDoc(doc(db, "hotelImgs", id), {
            ...hotelImg,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["hotelImgs"],
    }),
    deletehotelImg: builder.mutation({
      queryFn: async (id) => {
        try {
          await deleteDoc(doc(db, "hotelImgs", id));
          return { status: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["hotelImgs"],
    }),
  }),
});

export const {
  useFetchhotelImgQuery,
  useFetchhotelImgsQuery,
  useAddhotelImgMutation,
  useDeletehotelImgMutation,
  useUpdatehotelImgMutation,
} = hotelImgsApi;
export default hotelImgsApi;
