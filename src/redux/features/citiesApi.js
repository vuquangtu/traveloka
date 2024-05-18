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

const citiesApi = createApi({
  reducerPath: "citiesApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["cities"],
  endpoints: (builder) => ({
    fetchcities: builder.query({
      queryFn: async () => {
        try {
          const citiesRef = collection(db, "cities");
          const querySnapshot = await getDocs(citiesRef);
          const listcities = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: listcities };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["cities"],
    }),
    fetchcity: builder.query({
      queryFn: async (id) => {
        try {
          const cityRef = doc(db, "cities", id);
          const snapshot = await getDoc(cityRef);
          return { data: snapshot.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["cities"],
    }),

    addcity: builder.mutation({
      queryFn: async (city) => {
        try {
          await addDoc(collection(db, "cities"), {
            ...city,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["cities"],
    }),
    updatecity: builder.mutation({
      queryFn: async ({ id, city }) => {
        try {
          await updateDoc(doc(db, "cities", id), {
            ...city,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["cities"],
    }),
    deletecity: builder.mutation({
      queryFn: async (id) => {
        try {
          await deleteDoc(doc(db, "cities", id));
          return { status: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["cities"],
    }),
  }),
});

export const {
  useFetchcityQuery,
  useFetchcitiesQuery,
  useAddcityMutation,
  useDeletecityMutation,
  useUpdatecityMutation,
} = citiesApi;
export default citiesApi;
