#include <stdio.h>
#include <malloc.h>
#define len(a) (sizeof(a) / sizeof(a[0]))  

int lis(int arr[], int len)  
{  
    int longest[len];
    int list[len]; 

    for (int i=0 ; i<len; i++){
        longest[i] = 1;
    }  
         
    for (int j=1; j<len; j++) {  
        for (int i=0; i<j; i++) {  
            if (arr[j]>arr[i] && longest[j]<longest[i]+1){   
                longest[j] = longest[i] + 1;
            }  
        }  
    }

    int max = 0;  
    for (int j=0; j<len; j++) { 
        printf("%d\n",longest[j]); 
        if (longest[j] > max) 
            max = longest[j];    
    } 
    printf("The longgest length is :%d\n",max );

    //printf the longest list
    int *temp;
    temp=(int *)malloc(sizeof(int)*max);
    int k=max,m=len-1;
    for (;m>=0;m--)
    {
        if (longest[m]==k){
            temp[k-1]=arr[m];
            k--;
        }
    }
    for(int i=0;i<max;i++)
        printf("%d ",temp[i]);
    free(temp);
    return max;

}  
  
int main()  
{  
    int arr[] = {1, 4, 5, 6, 2, 3, 8};  
    lis(arr, len(arr));
    return 0;  
}  
