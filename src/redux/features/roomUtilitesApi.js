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

const roomUtilitesApi = createApi({
  reducerPath: "roomUtilitesApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["roomUtilites"],
  endpoints: (builder) => ({
    fetchroomUtilites: builder.query({
      queryFn: async () => {
        try {
          const roomUtilitesRef = collection(db, "roomUtilites");
          const querySnapshot = await getDocs(roomUtilitesRef);
          const listroomUtilites = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: listroomUtilites };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["roomUtilites"],
    }),
    fetchroomUtilite: builder.query({
      queryFn: async (id) => {
        try {
          const roomUtiliteRef = doc(db, "roomUtilites", id);
          const snapshot = await getDoc(roomUtiliteRef);
          return { data: snapshot.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["roomUtilites"],
    }),

    addroomUtilite: builder.mutation({
      queryFn: async (roomUtilite) => {
        try {
          await addDoc(collection(db, "roomUtilites"), {
            ...roomUtilite,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["roomUtilites"],
    }),
    updateroomUtilite: builder.mutation({
      queryFn: async ({ id, roomUtilite }) => {
        try {
          await updateDoc(doc(db, "roomUtilites", id), {
            ...roomUtilite,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["roomUtilites"],
    }),
    deleteroomUtilite: builder.mutation({
      queryFn: async (id) => {
        try {
          await deleteDoc(doc(db, "roomUtilites", id));
          return { status: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["roomUtilites"],
    }),
  }),
});

export const {
  useFetchroomUtiliteQuery,
  useFetchroomUtilitesQuery,
  useAddroomUtiliteMutation,
  useDeleteroomUtiliteMutation,
  useUpdateroomUtiliteMutation,
} = roomUtilitesApi;
export default roomUtilitesApi;
