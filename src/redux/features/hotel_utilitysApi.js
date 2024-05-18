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

const hotel_utilitysApi = createApi({
  reducerPath: "hotel_utilitysApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["hotel_utilitys"],
  endpoints: (builder) => ({
    fetchhotel_utilitys: builder.query({
      queryFn: async () => {
        try {
          const hotel_utilitysRef = collection(db, "hotel_utilitys");
          const querySnapshot = await getDocs(hotel_utilitysRef);
          const listhotel_utilitys = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: listhotel_utilitys };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["hotel_utilitys"],
    }),
    fetchhotel_utility: builder.query({
      queryFn: async (id) => {
        try {
          const hotel_utilityRef = doc(db, "hotel_utilitys", id);
          const snapshot = await getDoc(hotel_utilityRef);
          return { data: snapshot.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["hotel_utilitys"],
    }),

    addhotel_utility: builder.mutation({
      queryFn: async (hotel_utility) => {
        try {
          await addDoc(collection(db, "hotel_utilitys"), {
            ...hotel_utility,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["hotel_utilitys"],
    }),
    updatehotel_utility: builder.mutation({
      queryFn: async ({ id, hotel_utility }) => {
        try {
          await updateDoc(doc(db, "hotel_utilitys", id), {
            ...hotel_utility,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["hotel_utilitys"],
    }),
    deletehotel_utility: builder.mutation({
      queryFn: async (id) => {
        try {
          await deleteDoc(doc(db, "hotel_utilitys", id));
          return { status: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["hotel_utilitys"],
    }),
  }),
});

export const {
  useFetchhotel_utilityQuery,
  useFetchhotel_utilitysQuery,
  useAddhotel_utilityMutation,
  useDeletehotel_utilityMutation,
  useUpdatehotel_utilityMutation,
} = hotel_utilitysApi;
export default hotel_utilitysApi;
