#include <stdio.h>
int main()
{
  	int arr[101],n,i,j,t;
	scanf("%d",&n);
	int flag = 1;
	for(i=0;i<n ;i++)
	{
		scanf("%d",&arr[i]);
	}
	for(i = 0;i< n &&flag;i++)
	{
		flag = 0;
		for(j = 0;j< n -i;j++)
		{
			if(arr[j]>arr[j+1])
			{
				t = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = t;
				flag = 1;
			}
		}
	}
	for(i=0;i<n ;i++)
	{
		printf("%d ",arr[i]);
	}
}
