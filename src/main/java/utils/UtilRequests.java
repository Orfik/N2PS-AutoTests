package utils;

import com.squareup.okhttp.*;

import java.io.IOException;

public class UtilRequests {

    public static void postRequest(String apiURL, String bodyContent) throws IOException {
        OkHttpClient client = new OkHttpClient();

        MediaType mediaType = MediaType.parse("multipart/form-data; boundary=---011000010111000001101001");
        RequestBody body = RequestBody.create(mediaType, bodyContent);
        Request request = new Request.Builder()
                .url(apiURL)
                .post(body)
                .addHeader("authorization", "Bearer psl5OjLTP'sIq1r3")
                .addHeader("content-type", "multipart/form-data; boundary=---011000010111000001101001")
                .addHeader("cache-control", "no-cache")
                .build();
        Response response = client.newCall(request).execute();
        System.out.println(response.body().string());
    }
}
