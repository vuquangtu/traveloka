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

const hotel_utilitys2Api = createApi({
  reducerPath: "hotel_utilitys2Api",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["hotel_utilitys2"],
  endpoints: (builder) => ({
    fetchhotel_utilitys2: builder.query({
      queryFn: async () => {
        try {
          const hotel_utilitys2Ref = collection(db, "hotel_utilitys2");
          const querySnapshot = await getDocs(hotel_utilitys2Ref);
          const listhotel_utilitys2 = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: listhotel_utilitys2 };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["hotel_utilitys2"],
    }),
    fetchhotel_utility2: builder.query({
      queryFn: async (id) => {
        try {
          const hotel_utility2Ref = doc(db, "hotel_utilitys2", id);
          const snapshot = await getDoc(hotel_utility2Ref);
          return { data: snapshot.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["hotel_utilitys2"],
    }),

    addhotel_utility2: builder.mutation({
      queryFn: async (hotel_utility2) => {
        try {
          await addDoc(collection(db, "hotel_utilitys2"), {
            ...hotel_utility2,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["hotel_utilitys2"],
    }),
    updatehotel_utility2: builder.mutation({
      queryFn: async ({ id, hotel_utility2 }) => {
        try {
          await updateDoc(doc(db, "hotel_utilitys2", id), {
            ...hotel_utility2,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["hotel_utilitys2"],
    }),
    deletehotel_utility2: builder.mutation({
      queryFn: async (id) => {
        try {
          await deleteDoc(doc(db, "hotel_utilitys2", id));
          return { status: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["hotel_utilitys2"],
    }),
  }),
});

export const {
  useFetchhotel_utility2Query,
  useFetchhotel_utilitys2Query,
  useAddhotel_utility2Mutation,
  useDeletehotel_utility2Mutation,
  useUpdatehotel_utility2Mutation,
} = hotel_utilitys2Api;
export default hotel_utilitys2Api;
