#define M 10
#include <stdio.h>
main()
{
	int a[M]={-12,0,6,16,23,56,80,100,110,123} ;
	int i,n,low,mid,high,found;
	low=0;
	high=M-1;
	found=0; 
	for(i =0;i<M;i++){
		printf("%d ",a[i]);
	} 
	printf("\n"); 
	printf("��������Ҫ���ҵ�����");
	scanf("%d",&n);
	while(low<=high)
	{
		mid=(low+high)/2;
		if(n==a[mid])
		{
			found=1;break;
		}
		else if(n>a[mid])
			low=mid+1;
		else 
			high=mid-1;
	} 
	if(found==1)
	
		printf("��Ҫ�ҵ���%d��%d��",n,mid);
	
	else
		printf("sorry");
	
}
