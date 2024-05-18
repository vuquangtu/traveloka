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

const postdatasApi = createApi({
  reducerPath: "postdatasApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["postdatas"],
  endpoints: (builder) => ({
    fetchpostdatas: builder.query({
      queryFn: async () => {
        try {
          const postdatasRef = collection(db, "postdatas");
          const querySnapshot = await getDocs(postdatasRef);
          const listpostdatas = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: listpostdatas };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["postdatas"],
    }),
    fetchpostdata: builder.query({
      queryFn: async (id) => {
        try {
          const postdataRef = doc(db, "postdatas", id);
          const snapshot = await getDoc(postdataRef);
          return { data: snapshot.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["postdatas"],
    }),

    addpostdata: builder.mutation({
      queryFn: async (postdata) => {
        try {
          await addDoc(collection(db, "postdatas"), {
            ...postdata,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["postdatas"],
    }),
    updatepostdata: builder.mutation({
      queryFn: async ({ id, postdata }) => {
        try {
          await updateDoc(doc(db, "postdatas", id), {
            ...postdata,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["postdatas"],
    }),
    deletepostdata: builder.mutation({
      queryFn: async (id) => {
        try {
          await deleteDoc(doc(db, "postdatas", id));
          return { status: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["postdatas"],
    }),
  }),
});

export const {
  useFetchpostdataQuery,
  useFetchpostdatasQuery,
  useAddpostdataMutation,
  useDeletepostdataMutation,
  useUpdatepostdataMutation,
} = postdatasApi;
export default postdatasApi;
